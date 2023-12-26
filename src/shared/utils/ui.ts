export function truncateText(str: string, maxlength: number) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + "..." : str;
}

/**
 * For instance:
 *
    truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"
    truncate("Hi everyone!", 20) = "Hi everyone!"
 */
