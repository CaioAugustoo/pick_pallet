import toast from "react-hot-toast";

const styles = {
  style: {
    background: "var(--toast-bg)",
    color: "var(--toast-text)",
  },
  icon: "🎨",
};

export function makeToast(title: string = "Cor copiada!") {
  toast.success(title, styles);
}
