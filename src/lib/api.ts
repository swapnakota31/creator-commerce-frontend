"use client";

/**
 * API Integration Types and Placeholder Handlers
 * 
 * These types and handlers are prepared for future backend integration.
 * All functions contain TODO comments for implementing actual API calls.
 */

// ============================================================================
// AUTHENTICATION TYPES
// ============================================================================

export interface SignupRequest {
  email: string;
  password: string;
}

export interface SignupResponse {
  success: boolean;
  userId: string;
  message: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  userId: string;
  token: string;
  message: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ForgotPasswordResponse {
  success: boolean;
  message: string;
}

export interface SocialAuthRequest {
  provider: "google" | "apple";
  token: string;
}

export interface SocialAuthResponse {
  success: boolean;
  userId: string;
  token: string;
  isNewUser: boolean;
  message: string;
}

// ============================================================================
// STORE CREATION TYPES
// ============================================================================

export interface CreateStoreRequest {
  storeName: string;
  productUrl: string;
}

export interface CreateStoreResponse {
  success: boolean;
  storeId: string;
  storeUrl: string;
  productId: string;
  message: string;
}

// ============================================================================
// PLACEHOLDER HANDLERS FOR FUTURE API INTEGRATION
// ============================================================================

/**
 * Handle user signup
 * TODO: Implement POST /auth/signup endpoint
 * TODO: Hash password client-side before sending
 * TODO: Handle email validation
 * TODO: Store auth token in secure storage
 */
export async function handleSignup(data: SignupRequest): Promise<SignupResponse> {
  console.log("📝 Signup handler - Future API integration", data);

  // TODO: Replace with actual API call
  // const response = await fetch('/api/auth/signup', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // });
  // const result = await response.json();
  // return result;

  // Mock response for now
  return {
    success: true,
    userId: "mock_user_id",
    message: "Signup successful",
  };
}

/**
 * Handle user login
 * TODO: Implement POST /auth/login endpoint
 * TODO: Validate credentials against backend
 * TODO: Store auth token securely
 * TODO: Handle invalid password attempts
 */
export async function handleLogin(data: LoginRequest): Promise<LoginResponse> {
  console.log("🔐 Login handler - Future API integration", data);

  // TODO: Replace with actual API call
  // const response = await fetch('/api/auth/login', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // });
  // const result = await response.json();
  // return result;

  // Mock response for now
  return {
    success: true,
    userId: "mock_user_id",
    token: "mock_jwt_token",
    message: "Login successful",
  };
}

/**
 * Handle forgot password request
 * TODO: Implement POST /auth/forgot-password endpoint
 * TODO: Generate secure reset token
 * TODO: Send reset email to user
 * TODO: Validate email exists
 */
export async function handleForgotPassword(data: ForgotPasswordRequest): Promise<ForgotPasswordResponse> {
  console.log("🔑 Forgot password handler - Future API integration", data);

  // TODO: Replace with actual API call
  // const response = await fetch('/api/auth/forgot-password', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // });
  // const result = await response.json();
  // return result;

  // Mock response for now
  return {
    success: true,
    message: "Reset link sent to your email",
  };
}

/**
 * Handle social authentication (Google, Apple)
 * TODO: Implement POST /auth/social endpoint
 * TODO: Verify social provider token
 * TODO: Create user if new, log in if existing
 * TODO: Handle provider-specific data mapping
 */
export async function handleSocialAuth(data: SocialAuthRequest): Promise<SocialAuthResponse> {
  console.log(`🔗 ${data.provider} auth handler - Future API integration`, data);

  // TODO: Replace with actual API call
  // const response = await fetch('/api/auth/social', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // });
  // const result = await response.json();
  // return result;

  // Mock response for now
  return {
    success: true,
    userId: "mock_user_id",
    token: "mock_jwt_token",
    isNewUser: true,
    message: `${data.provider} authentication successful`,
  };
}

/**
 * Handle store creation
 * TODO: Implement POST /stores/create endpoint
 * TODO: Validate product URL and fetch product details
 * TODO: Create store with unique URL
 * TODO: Create first product from affiliate link
 * TODO: Link store to creator account
 */
export async function handleCreateStore(data: CreateStoreRequest): Promise<CreateStoreResponse> {
  console.log("🏪 Store creation handler - Future API integration", data);

  // TODO: Replace with actual API call
  // const response = await fetch('/api/stores/create', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // });
  // const result = await response.json();
  // return result;

  // Mock response for now
  return {
    success: true,
    storeId: "mock_store_id",
    storeUrl: `https://${data.storeName.toLowerCase()}.linkshells.ai`,
    productId: "mock_product_id",
    message: "Store created successfully",
  };
}

// ============================================================================
// ERROR TYPE DEFINITIONS (for frontend validation)
// ============================================================================

export type AuthErrorType = 
  | "email_already_exists"
  | "invalid_email"
  | "invalid_password"
  | "incorrect_password"
  | "required_field"
  | "weak_password"
  | "user_not_found";

export type StoreErrorType =
  | "invalid_product_url"
  | "store_creation_failed"
  | "store_name_taken"
  | "required_field";

export const errorMessages: Record<AuthErrorType | StoreErrorType, string> = {
  // Auth errors
  email_already_exists: "An account with this email already exists.",
  invalid_email: "Please enter a valid email address.",
  invalid_password: "Password must be at least 8 characters.",
  incorrect_password: "Email or password is incorrect.",
  required_field: "All fields are required.",
  weak_password: "Password must contain letters, numbers, and symbols.",
  user_not_found: "No account found with this email.",
  // Store errors
  invalid_product_url: "Please enter a valid product URL.",
  store_creation_failed: "Failed to create store. Please try again.",
  store_name_taken: "This store name is already taken.",
};
