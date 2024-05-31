interface Metadata {
    title: string;
    description: string;
  }
  
  const baseMetadata: Metadata = {
    title: 'Realia',
    description: 'Created by Farrago',
  };
  
  export const getMetadata = (page: 'login' | 'signup'  |'Home'): Metadata => {
    switch (page) {
      case 'login':
        return {
          ...baseMetadata,
          title: `${baseMetadata.title} | Login`,
        };
      case 'signup':
        return {
          ...baseMetadata,
          title: `${baseMetadata.title} | Sign Up`,
        };
      default:
        return baseMetadata;
    }
  };