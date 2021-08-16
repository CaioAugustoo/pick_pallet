import toast from "react-hot-toast";

const toastIcon = {
  icon: "🎨",
};

export function toastColor() {
  toast.success("Cor copiada!", toastIcon);
}

export function toastFavorited() {
  toast.success("Marcada como favorita!", toastIcon);
}

export function toastRemovedFavorite() {
  toast.success("Removida como favorita!", toastIcon);
}
