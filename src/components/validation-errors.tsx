interface Props {
  errors: string[];
}

export default function ValidationErrors({ errors }: Props) {
  return <span class="text-xs text-rose-600 italic">{errors.join(", ")}</span>;
}
