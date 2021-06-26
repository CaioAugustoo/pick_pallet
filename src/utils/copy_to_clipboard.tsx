export default function copyToClipboard(
  target: string | number,
  isLink: boolean = false
) {
  return isLink
    ? navigator.clipboard.writeText(
        `${window.location.hostname}/pallet/${target}`
      )
    : navigator.clipboard.writeText(`${target}`);
}
