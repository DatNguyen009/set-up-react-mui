import FormProvider from '@/components/hook-form/form-provider'
import RHFAutocomplete from '@/components/hook-form/rhf-autocomplete'
import RHFCheckbox from '@/components/hook-form/rhf-checkbox'
import RHFTextField from '@/components/hook-form/rhf-text-field'
import { Button, Stack, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'

type FormValues = {
  firstName: string
  lastName: string
  sex: string
  test: string
  checkbox: boolean
}

const ProductDetailPage = () => {
  const methods = useForm<FormValues>()

  const handleSubmit = (data: FormValues) => {
    console.log('data :>> ', data)
  }

  return (
    <div>
      <Typography>ProductDetailPage</Typography>

      <FormProvider methods={methods} onSubmit={handleSubmit}>
        <Stack gap={3}>
          <RHFTextField name='firstname' label='First Name' />
          <RHFTextField name='lastname' label='Last Name' />
          <RHFTextField name='sex' label='sex' />
          <RHFAutocomplete
            name='test'
            label='test'
            options={[
              { label: 'test1', value: '1' },
              { label: 'test2', value: '2' }
            ]}
          />
          <RHFCheckbox name='checkbox' label='checkbox' />
        </Stack>
        <Button type='submit'>Submit</Button>
      </FormProvider>
    </div>
  )
}

export default ProductDetailPage
