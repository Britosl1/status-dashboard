export function formatDate(date: string) {
  const now = new Date();
  const updated = new Date(date);
  const diffMs = now.getTime() - updated.getTime();
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffYears = Math.floor(diffDays / 365);

  if (diffMs < 0) {
    return "in the future";
  } else if (diffMins < 1) {
    return "just now";
  } else if (diffMins < 60) {
    return `${diffMins} minute${diffMins === 1 ? "" : "s"}`;
  } else if (diffHours < 24) {
    return `${diffHours} hour${diffHours === 1 ? "" : "s"}`;
  } else if (diffDays < 365) {
    return `${diffDays} day${diffDays === 1 ? "" : "s"}`;
  } else {
    return `${diffYears} year${diffYears === 1 ? "" : "s"}`;
  }
}
