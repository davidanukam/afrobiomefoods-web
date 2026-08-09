import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { dataset, projectId } from "../env";

const builder = projectId
  ? createImageUrlBuilder({ projectId, dataset })
  : null;

export function urlForImage(source: SanityImageSource | null | undefined) {
  if (!builder || !source) return null;
  return builder.image(source).auto("format").fit("max");
}

export function resolveImageUrl(
  image: SanityImageSource | null | undefined,
  fallback?: string,
  width = 1600,
) {
  const built = urlForImage(image);
  if (built) return built.width(width).url();
  return fallback || "";
}
