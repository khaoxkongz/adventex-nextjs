import { ZodError } from "zod"

export type ActionState = {
  success: boolean
  errors?: {
    form?: string
    name?: string
    email?: string
    subject?: string
    message?: string
  }
  defaultValues: {
    name?: string
    email?: string
    subject?: string
    message?: string
  }
}

export const EMPTY_ACTION_STATE: ActionState = {
  success: false,
  defaultValues: {},
}

export const formErrorToActionState = (error: unknown): ActionState => {
  if (error instanceof ZodError) {
    const fieldErrors = error.flatten().fieldErrors
    return {
      success: false,
      errors: {
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        subject: fieldErrors.subject?.[0],
        message: fieldErrors.message?.[0],
      },
      defaultValues: {},
    }
  } else if (error instanceof Error) {
    return {
      success: false,
      errors: {
        form: error.message,
      },
      defaultValues: {},
    }
  } else {
    return {
      success: false,
      errors: {
        form: "An unknown error occurred",
      },
      defaultValues: {},
    }
  }
}
