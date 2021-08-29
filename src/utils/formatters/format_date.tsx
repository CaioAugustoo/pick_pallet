import { formatDistanceToNowStrict } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export default function formatDate(date: string) {
  return formatDistanceToNowStrict(Date.parse(date.replace(/-/g, "/")), {
    locale: ptBR,
  });
}
