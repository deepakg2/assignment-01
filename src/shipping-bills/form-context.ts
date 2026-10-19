import { useForm } from 'core/form'
import { ShippingBillFormValues } from './model'

export type BillFormContext = ReturnType<typeof useForm<ShippingBillFormValues>>