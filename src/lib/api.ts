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

// ============================================================================
// BACKEND API INTEGRATION
// ============================================================================

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://ccp-server-1gi2.onrender.com/api";

export interface BackendStorefront {
  id: string;
  userId: string;
  storeName: string;
  bio?: string | null;
  profileImage?: string | null;
  tagline?: string | null;
  socialLinks?: {
    instagram?: string;
    youtube?: string;
    twitter?: string;
  } | null;
  creatorCategory?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface BackendProduct {
  id: string;
  title: string;
  slug: string;
  brand: string;
  shortDescription?: string | null;
  fullDescription?: string | null;
  category: string;
  subcategory?: string | null;
  primaryImageUrl: string;
  price: string;
  currency: string;
  rating?: string | null;
  reviewCount: number;
  sourcePlatform: string;
  sourceProductId: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  productLinks: Array<{
    id: string;
    productId: string;
    platform: string;
    originalUrl: string;
    affiliateUrl?: string | null;
    isPrimary?: boolean;
    createdAt?: string;
  }>;
}

/**
 * Fetch storefront profile from backend by username
 */
export async function getStorefront(username: string): Promise<BackendStorefront> {
  const url = `${API_BASE_URL}/stores/${username}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      if (res.status === 404) {
        throw new Error("Storefront not found");
      }
      throw new Error(`Error fetching storefront: ${res.statusText}`);
    }
    const result = await res.json();
    if (!result.success || !result.data) {
      throw new Error(result.message || "Failed to load storefront data");
    }
    return result.data;
  } catch (error) {
    console.error(`[API] getStorefront error for ${username}:`, error);
    throw error;
  }
}

/**
 * Fetch all active catalog products from backend
 */
export async function getStoreProducts(username: string): Promise<BackendProduct[]> {
  const url = `${API_BASE_URL}/products`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Error fetching products: ${res.statusText}`);
    }
    const result = await res.json();
    if (!result.success || !result.data || !result.data.products) {
      throw new Error(result.message || "Failed to load products");
    }
    // Return products
    return result.data.products;
  } catch (error) {
    console.error(`[API] getStoreProducts error:`, error);
    throw error;
  }
}

/**
 * Send an analytics event to backend
 */
export async function trackAnalyticsEvent(payload: {
  type: string;
  creatorId?: string;
  productId?: string;
  deviceType: string;
  trafficSource: string;
}): Promise<void> {
  const url = `${API_BASE_URL}/analytics`;
  try {
    // Attempt to send but fail silently if not implemented on backend
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.warn(`[API] Analytics tracking returned status: ${res.status}`);
    }
  } catch (error) {
    console.warn("[API] Analytics tracking failed (silent):", error);
  }
}

/**
 * Fetch a single product's details by its slug
 */
export async function getProductBySlug(slug: string): Promise<BackendProduct> {
  const url = `${API_BASE_URL}/products/${slug}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      if (res.status === 404) {
        throw new Error("Product not found");
      }
      throw new Error(`Error fetching product: ${res.statusText}`);
    }
    const result = await res.json();
    if (!result.success || !result.product) {
      throw new Error(result.message || "Failed to load product details");
    }
    return result.product;
  } catch (error) {
    console.error(`[API] getProductBySlug error for ${slug}:`, error);
    throw error;
  }
}


