import toast from "react-hot-toast";

const styles = {
  style: {
    background: "var(--toast-bg)",
    color: "var(--toast-text)",
  },
  icon: "🎨",
};

export function toastColor() {
  toast.success("Cor copiada!", styles);
}

export function toastFavorited() {
  toast.success("Marcada como favorita!", styles);
}

export function toastRemovedFavorite() {
  toast.success("Removida como favorita!", styles);
}
