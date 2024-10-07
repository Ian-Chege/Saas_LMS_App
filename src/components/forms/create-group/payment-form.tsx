import { usePayments } from "@/hooks/payment"

type PaymentFormProps = {
  userId: string
  affiliate: boolean
  stripeId?: string
}

export const PaymentForm = ({
  userId,
  affiliate,
  stripeId,
}: PaymentFormProps) => {
  const { onCreateGroup } = usePayments(userId, affiliate)
}
