const generateImageUserAvatar = (username: string) => {
  const parseUsername = username.slice(0, 2).toUpperCase();

  return `
  https://ui-avatars.com/api/?name=${parseUsername}?bold=true?background=random?format=svg
  `;
};

export default generateImageUserAvatar;
