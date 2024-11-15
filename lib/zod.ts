import { object, string } from "zod";

// Schema for Sign In
export const signInSchema = object({
    email: string({
        required_error: "Email is required",
    })
        .email("Invalid email format"),
    password: string({
        required_error: "Password is required",
    })
});

// Schema for Registration
export const registerSchema = object({
    username: string({
        required_error: "Username is required",
    })
        .min(2, "Username must be at least 2 characters")
        .max(20, "Username must be less than 20 characters"),

    email: string({
        required_error: "Email is required",
    })
        .email("Invalid email format"),

    password: string({
        required_error: "Password is required",
    })
        .min(6, "Password must be at least 6 characters")
        .max(32, "Password must be less than 32 characters"),

    confirmPassword: string({
        required_error: "Confirm Password is required",
    })
        .min(6, "Confirm Password must be at least 6 characters")
        .max(32, "Confirm Password must be less than 32 characters"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});
