// User interface
export const createUser = (id, name, email, role) => ({
  id,
  name,
  email,
  role
});

// Company Settings interface
export const createCompanySettings = (name, logo, primaryColor, secondaryColor, fontFamily, fontSize) => ({
  name,
  logo,
  primaryColor,
  secondaryColor,
  fontFamily,
  fontSize
});

// Admin Box interface
export const createAdminBox = (id, title, description, icon, color) => ({
  id,
  title,
  description,
  icon,
  color
});