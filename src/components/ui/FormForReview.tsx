"use client";
import React, { useState } from "react";
import { Cross, Star } from "lucide-react";

interface FormForReviewProps {
  onSubmit: (formData: {
    name: string;
    role: string;
    country: string;
    rating: string;
    description: string;
  }) => Promise<{ status: string }>;
  closePopup: () => void;
}

interface FormErrors {
  name?: string;
  role?: string;
  country?: string;
  rating?: string;
  description?: string;
}

export default function FormForReview({
  onSubmit,
  closePopup,
}: FormForReviewProps) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [country, setCountry] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  function validate(): FormErrors {
    const newErrors: FormErrors = {};

    const nameRoleCountryPattern = /^[A-Za-z\s]+$/;

    // Name
    if (!name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!nameRoleCountryPattern.test(name.trim())) {
      newErrors.name = "Name must not contain numbers or symbols.";
    } else if (name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    } else if (name.trim().length > 30) {
      newErrors.name = "Name must be under 30 characters.";
    }

    // Role
    if (!role.trim()) {
      newErrors.role = "Role is required.";
    } else if (!nameRoleCountryPattern.test(role.trim())) {
      newErrors.role = "Role must not contain numbers or symbols.";
    } else if (role.trim().length < 3) {
      newErrors.role = "Role must be at least 3 characters.";
    } else if (role.trim().length > 30) {
      newErrors.role = "Role must be under 30 characters.";
    }

    // Country
    if (!country.trim()) {
      newErrors.country = "Country is required.";
    } else if (!nameRoleCountryPattern.test(country.trim())) {
      newErrors.country = "Country must not contain numbers or symbols.";
    } else if (country.trim().length < 3) {
      newErrors.country = "Country must be at least 3 characters.";
    } else if (country.trim().length > 30) {
      newErrors.country = "Country must be under 30 characters.";
    }

    // Rating
    if (rating === 0) {
      newErrors.rating = "Please select a rating.";
    }

    // Description
    if (!description.trim()) {
      newErrors.description = "A short review is required.";
    } else if (description.trim().length < 10) {
      newErrors.description = "Review must be at least 10 characters.";
    } else if (description.trim().length > 150) {
      newErrors.description = "Review must be under 150 characters.";
    }

    return newErrors;
  }

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsLoading(true);

    try {
      await onSubmit({
        name: name.trim(),
        role: role.trim(),
        country: country.trim(),
        rating: String(rating),
        description: description.trim(),
      });

      setIsLoading(false);
      setShowSuccess(true);

      // reset form
      setName("");
      setRole("");
      setCountry("");
      setRating(0);
      setDescription("");
      setErrors({});

      // auto-hide success popup after a few seconds
      setTimeout(() => setShowSuccess(false), 3000);
      setTimeout(() => closePopup(), 2000);
    } catch (err) {
      console.error("Submit failed:", err);
      setIsLoading(false);
      setErrors({ description: "Something went wrong. Please try again." });
    }
  }

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative overflow-hidden w-11/12 sm:w-8/12 lg:w-6/12 mx-auto z-[62] lg:scale-80"
    >
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-5 bg-white rounded-2xl p-6 sm:p-8 shadow-sm h-fit overflow-hidden relative  "
      >
        <h3 className="text-[20px] sm:text-[24px] font-semibold text-[#1D2939]">
          Share Your Experience
        </h3>
        {/* Name */}
        <div className="flex flex-col gap-1">
          <label className="text-[14px] font-medium text-[#344054]">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className={`w-full px-4 py-2.5 rounded-lg border text-[14px] text-[#1D2939] outline-none transition-colors ${
              errors.name
                ? "border-red-500 focus:border-red-500"
                : "border-[#D0D5DD] focus:border-[#FD853A] hover:border-[#939393]"
            }`}
          />
          {errors.name && (
            <span className="text-[12px] text-red-500">{errors.name}</span>
          )}
        </div>

        {/* Role */}
        <div className="flex flex-col gap-1">
          <label className="text-[14px] font-medium text-[#344054]">Role</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="e.g. Wildlife Photographer"
            className={`w-full px-4 py-2.5 rounded-lg border text-[14px] text-[#1D2939] outline-none transition-colors ${
              errors.role
                ? "border-red-500 focus:border-red-500"
                : "border-[#D0D5DD] focus:border-[#FD853A]  hover:border-[#939393]"
            }`}
          />
          {errors.role && (
            <span className="text-[12px] text-red-500">{errors.role}</span>
          )}
        </div>

        {/* Country */}
        <div className="flex flex-col gap-1">
          <label className="text-[14px] font-medium text-[#344054]">
            Country
          </label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="e.g. Sri Lanka"
            className={`w-full px-4 py-2.5 rounded-lg border text-[14px] text-[#1D2939] outline-none transition-colors ${
              errors.country
                ? "border-red-500 focus:border-red-500"
                : "border-[#D0D5DD] focus:border-[#FD853A]  hover:border-[#939393]"
            }`}
          />
          {errors.country && (
            <span className="text-[12px] text-red-500">{errors.country}</span>
          )}
        </div>

        {/* Star Rating */}
        <div className="flex flex-col gap-1">
          <label className="text-[14px] font-medium text-[#344054]">
            Rating
          </label>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="text-[28px] leading-none transition-transform hover:scale-110"
                aria-label={`Rate ${star} stars`}
              >
                <Star
                  size={16}
                  className={` sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 ${
                    star <= (hoverRating || rating)
                      ? "text-[#FD853A] fill-[#FD853A]"
                      : "text-[#D0D5DD]  fill-[#D0D5DD]"
                  } `}
                />
              </button>
            ))}
          </div>
          {errors.rating && (
            <span className="text-[12px] text-red-500">{errors.rating}</span>
          )}
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <label className="text-[14px] font-medium text-[#344054]">
            Your Review
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Tell me about your experience..."
            rows={4}
            maxLength={150}
            className={`w-full px-4 py-2.5 rounded-lg border text-[14px] text-[#1D2939] outline-none resize-none transition-colors ${
              errors.description
                ? "border-red-500 focus:border-red-500"
                : "border-[#D0D5DD] focus:border-[#FD853A]"
            }`}
          />
          <div className="flex justify-between">
            {errors.description ? (
              <span className="text-[12px] text-red-500">
                {errors.description}
              </span>
            ) : (
              <span />
            )}
            <span className="text-[12px] text-[#98A2B3]">
              {description.length}/150
            </span>
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 bg-[#FD853A] text-white font-medium py-3 rounded-lg transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Review"
          )}
        </button>
        {/* Close btn */}
        <div
          onClick={() => {
            closePopup();
          }}
          className=" absolute top-0 -right-22 -translate-y-[65%] -rotate-12 size-40 rounded-[40px] cursor-pointer group  bg-[#373737d3] flex items-end"
        >
          <Cross className=" -translate-y-5  translate-x-5 -rotate-[24deg] text-[#fd853adf] duration-300 group-hover:scale-120 group-hover:text-[#FD853A]" />
        </div>
      </form>
      {/* Success popup */}
      <div
        className={`fixed inset-0 flex items-center justify-center z-[60] transition-opacity duration-300 pointer-events-none ${
          showSuccess ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`bg-white rounded-2xl px-8 py-6 flex flex-col items-center gap-3 shadow-lg transition-all duration-300 ${
            showSuccess ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          <div className="w-14 h-14 rounded-full bg-[#12B76A] flex items-center justify-center">
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-[16px] font-medium text-[#1D2939]">
            Thank you for your review!
          </p>
        </div>
      </div>
    </div>
  );
}
