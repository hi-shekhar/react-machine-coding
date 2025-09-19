import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import * as z from "zod";
import "../styles/FormValidationApp.css";

const phoneSchema = z.object({
  number: z
    .string()
    .min(1, {
      message: "Number is required.",
    })
    .regex(/^\d{10}$/, {
      message: "10 digit number is required.",
    }),
  type: z.enum(["home", "work"]),
});

const formSchema = z
  .object({
    firstName: z.string().min(1, { message: "First Name is required." }),
    lastName: z
      .string()
      .min(1, { message: "Last Name is required." })
      .max(20, { message: "Max length is 20." }),
    isProfessional: z.boolean(),
    jobTitle: z.string().optional(),
    address: z.object({
      street: z.string().min(1, { message: "Street is required." }),
      city: z.string().min(1, { message: "City is required." }),
      state: z.string().min(1, { message: "State is required." }),
      zip: z
        .string()
        .min(1, { message: "Zip is required." })
        .regex(/^\d{5}(?:[-\s]\d{4})?$/, { message: "Zip is invalid." }),
    }),
    email: z
      .email({ message: "Invalid email format." })
      .min(1, { message: "Email is required." }),
    confirmEmail: z.string().min(1, { message: "Confirm Email is required." }),
    phones: z
      .array(phoneSchema)
      .min(1, { message: "At least one phone number is required." }),
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: "Emails do not match.",
    path: ["confirmEmail"],
  })
  .refine(
    (data) => {
      if (data.isProfessional) {
        return data.jobTitle && data.jobTitle.trim().length > 0;
      }
      return true;
    },
    {
      message: "Job Title is required.",
      path: ["jobTitle"],
    }
  );

type FormSchema = z.infer<typeof formSchema>;

const FormValidationApp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      isProfessional: false,
      jobTitle: "",
      address: {
        street: "",
        city: "",
        state: "",
        zip: "",
      },
      email: "",
      confirmEmail: "",
      phones: [{ number: "", type: "home" }],
    },
    mode: "onTouched",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "phones",
  });

  const isProfessional = useWatch({
    control,
    name: "isProfessional",
    defaultValue: false,
  });

  const onSubmit = (data: FormSchema) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const onReset = () => {
    reset();
  };

  const onLoad = () => {
    const sampleData: FormSchema = {
      firstName: "Himanshu",
      lastName: "Shekhar",
      address: {
        street: "123 Angular Street",
        city: "Reactive City",
        state: "CA",
        zip: "90210",
      },
      isProfessional: true,
      jobTitle: "Frontend Developer",
      email: "him.shek@example.com",
      confirmEmail: "him.shek@example.com",
      phones: [
        { number: "1234567890", type: "home" },
        { number: "0987654321", type: "work" },
      ],
    } as const;
    reset(sampleData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-section">
          <h3>Personal Information</h3>
          <div className="form-field">
            <label>First Name</label>
            <input type="text" {...register("firstName")} />
            {errors.firstName && (
              <span className="error-message">{errors.firstName.message}</span>
            )}
          </div>
          <div className="form-field">
            <label>Last Name</label>
            <input type="text" {...register("lastName")} />
            {errors.lastName && (
              <span className="error-message">{errors.lastName.message}</span>
            )}
          </div>

          <div className="conditional-field">
            <div className="checkbox-field">
              <input type="checkbox" {...register("isProfessional")} />
              <label>I'm a professional</label>
            </div>
            {isProfessional && (
              <div className="form-field">
                <label>Job Title</label>
                <input type="text" {...register("jobTitle")} />
                {errors.jobTitle && (
                  <span className="error-message">
                    {errors.jobTitle.message}
                  </span>
                )}
              </div>
            )}
          </div>

          <div className="form-section">
            <h3>Address</h3>
            <div className="form-field">
              <label>Street</label>
              <input type="text" {...register("address.street")} />
              {errors.address?.street && (
                <span className="error-message">
                  {errors.address.street.message}
                </span>
              )}
            </div>
            <div className="form-field">
              <label>City</label>
              <input type="text" {...register("address.city")} />
              {errors.address?.city && (
                <span className="error-message">
                  {errors.address.city.message}
                </span>
              )}
            </div>
            <div className="form-field">
              <label>State</label>
              <input type="text" {...register("address.state")} />
              {errors.address?.state && (
                <span className="error-message">
                  {errors.address.state.message}
                </span>
              )}
            </div>
            <div className="form-field">
              <label>Zip Code</label>
              <input type="text" {...register("address.zip")} />
              {errors.address?.zip && (
                <span className="error-message">
                  {errors.address.zip.message}
                </span>
              )}
            </div>
          </div>

          <div className="form-section">
            <h3>Contact</h3>
            <div className="form-field">
              <label>Email</label>
              <input type="text" {...register("email")} />
              {errors.email && (
                <span className="error-message">{errors.email.message}</span>
              )}
            </div>
            <div className="form-field">
              <label>Confirm Email</label>
              <input type="text" {...register("confirmEmail")} />
              {errors.confirmEmail && (
                <span className="error-message">
                  {errors.confirmEmail.message}
                </span>
              )}
            </div>
            {errors.confirmEmail && (
              <span className="error-error">{errors.confirmEmail.message}</span>
            )}
          </div>

          <div className="form-section">
            <h3>Phone</h3>
            <div className="add-phone-btn">
              <button
                type="button"
                onClick={() => append({ number: "", type: "home" })}
              >
                Add Phone
              </button>
            </div>
            {fields.map((field, index) => (
              <div key={field.id} className="phone-group">
                <div className="form-field">
                  <label>Phone Number</label>
                  <input type="text" {...register(`phones.${index}.number`)} />
                  {errors.phones?.[index]?.number && (
                    <span className="error-message">
                      {errors.phones[index]?.number?.message}
                    </span>
                  )}
                </div>
                <div className="form-field">
                  <label>Type</label>
                  <select {...register(`phones.${index}.type`)}>
                    <option value="home">Home</option>
                    <option value="work">Work</option>
                  </select>
                </div>
                <button type="button" onClick={() => remove(index)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="form-actions">
          <button type="submit" disabled={!isValid}>
            Submit
          </button>
          <button type="button" onClick={onReset}>
            Reset
          </button>
          <button type="button" onClick={onLoad}>
            Load
          </button>
        </div>
      </form>
      {isSubmitted && (
        <div className="success-message">
          <span>Form Submitted Successfully!</span>
        </div>
      )}
    </div>
  );
};

export default FormValidationApp;
