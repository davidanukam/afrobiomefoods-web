import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

/**
 * Sanity webhook target. Configure in sanity.io/manage → API → Webhooks:
 * URL: https://YOUR_DOMAIN/api/revalidate?secret=YOUR_SECRET
 * Dataset: production | Trigger on: Create, Update, Delete | Include drafts: no
 */
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const expected = process.env.SANITY_REVALIDATE_SECRET;

  if (!expected || secret !== expected) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await request.json().catch(() => ({}));
    const slug = typeof body?.slug === "string" ? body.slug : null;

    revalidateTag("sanity", "max");
    revalidatePath("/", "layout");

    if (slug) {
      revalidatePath(slug);
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      slug: slug || "all",
    });
  } catch (error) {
    console.error("Revalidate failed", error);
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 },
    );
  }
}

export async function GET(request: NextRequest) {
  return POST(request);
}
