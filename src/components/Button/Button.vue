<template>
  <button
    :type="type"
    :disabled="disabled"
    class="button-wrapper"
    :class="[
      `button-wrapper--${size}`,
      `button-wrapper--${color}`,
      `button-wrapper--${variant}`,
    ]"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
interface ButtonProps {
  label?: string;
  size?: "small" | "medium" | "large";
  color?: "primary" | "red";
  type?: "button" | "submit" | "reset";
  variant?: "text" | "outlined" | "contained";
  disabled?: boolean;
}
withDefaults(defineProps<ButtonProps>(), {
  size: "medium",
  color: "primary",
  type: "button",
  variant: "contained",
  disabled: false,
});
</script>

<style>
:root {
  --c-primary: #2563eb;
  --c-primary-rgb: 37, 99, 235;
  --c-primary-foreground: #ffffff;

  --c-destructive: #dc2626;
  --c-destructive-rgb: 220, 38, 38;
  --c-destructive-foreground: #ffffff;

  --c-muted-foreground: #9ca3af;
  --c-muted-foreground-rgb: 156, 163, 175;

  --c-title: #111827;
  --c-title-rgb: 17, 24, 39;

  --c-title-foreground: #374151;
  --c-title-foreground-rgb: 55, 65, 81;
}

.button-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 16px;
  border: 1px solid transparent;
  cursor: pointer;
}

.button-wrapper--small {
  padding: 4px 8px;
  font-size: 14px;
}

.button-wrapper--medium {
  padding: 8px 16px;
  font-size: 16px;
}

.button-wrapper--large {
  padding: 12px 24px;
  font-size: 18px;
}

/* Contained */
.button-wrapper--contained {
  border: none;
}

.button-wrapper--primary.button-wrapper--contained {
  background-color: var(--c-primary);
  color: var(--c-primary-foreground);
}

.button-wrapper--primary.button-wrapper--contained:hover {
  background-color: rgba(var(--c-primary-rgb), 0.9);
}

.button-wrapper--red.button-wrapper--contained {
  background-color: var(--c-destructive);
  color: var(--c-destructive-foreground);
}

.button-wrapper--red.button-wrapper--contained:hover {
  background-color: rgba(var(--c-destructive-rgb), 0.9);
}

/* Outlined */
.button-wrapper--primary.button-wrapper--outlined {
  border-color: var(--c-primary);
  background: transparent;
  color: var(--c-primary);
}

.button-wrapper--primary.button-wrapper--outlined:hover {
  color: rgba(var(--c-primary-rgb), 0.9);
}

.button-wrapper--red.button-wrapper--outlined {
  border-color: var(--c-destructive);
  background: transparent;
  color: var(--c-destructive);
}

.button-wrapper--red.button-wrapper--outlined:hover {
  color: rgba(var(--c-destructive-rgb), 0.9);
}

/* Text */
.button-wrapper--primary.button-wrapper--text {
  background: transparent;
}

.button-wrapper--primary.button-wrapper--text:hover {
  color: rgba(var(--c-primary-rgb), 0.9);
}

.button-wrapper--red.button-wrapper--text {
  background: transparent;
  color: var(--c-destructive);
}

.button-wrapper--red.button-wrapper--text:hover {
  color: rgba(var(--c-destructive-rgb), 0.9);
}

/* Disabled */
.button-wrapper:disabled {
  cursor: not-allowed;
  border-color: transparent;
  background-color: rgba(var(--c-muted-foreground-rgb), 0.5);
  color: rgba(var(--c-title-rgb), 0.8);
}

.button-wrapper:disabled.button-wrapper--text {
  background: transparent;
  color: rgba(var(--c-title-foreground-rgb), 0.4);
}

.button-wrapper:disabled.button-wrapper--outlined {
  border-color: rgba(var(--c-title-foreground-rgb), 0.4);
  background: transparent;
  color: rgba(var(--c-title-foreground-rgb), 0.4);
}

.button-wrapper:disabled.button-wrapper--contained {
  background-color: rgba(var(--c-muted-foreground-rgb), 0.5);
  color: rgba(var(--c-title-foreground-rgb), 0.4);
}

</style>