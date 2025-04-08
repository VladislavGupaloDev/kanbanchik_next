'use client'

import { Label } from '@/shared/components/ui/label'
import { cn } from '@/shared/lib/utils/utils'
import { Slot } from '@radix-ui/react-slot'
import { ComponentProps, createContext, useContext, useId } from 'react'
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  useFormContext,
  useFormState
} from 'react-hook-form'

/*
 * За основу shadcn и чуть переписывались.
 * Искючительно для внутреннего понимания, используется Slot от RadixUI
 */

type FormFieldContextProps = {
  name: string
}
const FormFieldContext = createContext<FormFieldContextProps>(
  {} as FormFieldContextProps
)

type FormItemContextProps = {
  id: string
}
const FormItemContext = createContext<FormItemContextProps>(
  {} as FormItemContextProps
)

/*
 *Прикольно все контексты объединили и отдаем впринципе все что нужно
 *Там генерятся еще отдельные id-шки на основе сгенереного, пока не пойму для чего это
 */
function useFormField() {
  const fieldContext = useContext(FormFieldContext)
  const itemContext = useContext(FormItemContext)
  const { getFieldState } = useFormContext()
  const formState = useFormState({ name: fieldContext.name })
  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error('useFormField работает исключительно внутри FormField')
  }

  return {
    id: itemContext.id,
    name: fieldContext.name,
    ...fieldState
  }
}
//TODO: Разобраться вот в этом всем, я сократил типы хз нужен ли он вообще тогда?
type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}
//? Магическая херня с типами, но по итогу она отдает тот же тип от name
function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({ ...props }: ControllerProps<TFieldValues, TName>) {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

// Провайдер обертка которая генерит айдишку для контекста
function FormItem({ className, ...props }: ComponentProps<'div'>) {
  const id = useId()
  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        className={cn(className)}
        {...props}
      />
    </FormItemContext.Provider>
  )
}

function FormLabel({ className, ...props }: ComponentProps<typeof Label>) {
  const { id, error } = useFormField()
  return (
    <Label
      id={id}
      aria-invalid={!!error}
      className={cn(className)}
      {...props}
    />
  )
}

// Просто обертка для того чтобы прокидывать пропсы во вложенный компонент
function FormControl({ className, ...props }: ComponentProps<typeof Slot>) {
  const { error, id } = useFormField()
  return (
    <Slot
      id={id}
      aria-invalid={!!error}
      className={cn(className)}
      {...props}
    />
  )
}

function FormMessage({
  hint,
  className,
  ...props
}: ComponentProps<'p'> & { hint?: string }) {
  const { error } = useFormField()
  if (error?.message) {
    return (
      <p
        className={cn('text-sm text-red-400', className)}
        {...props}
      >
        {error.message}
      </p>
    )
  }
  return hint ? (
    <p
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    >
      {hint}
    </p>
  ) : null
}

FormField.Item = FormItem
FormField.Label = FormLabel
FormField.Control = FormControl
FormField.Message = FormMessage

export { FormField }
