const generateImageUserAvatar = (username: string) => `
  https://ui-avatars.com/api/?name=${username || 'xx'}&bold=true&background=random&format=svg
  `;

export default generateImageUserAvatar;
