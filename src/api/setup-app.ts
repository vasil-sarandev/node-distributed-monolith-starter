const setupServices = async () => {
  console.log('Setting up app services...');
  // add services here
  console.log('Services setup complete');
};

export const setupApplication = async () => {
  try {
    await setupServices();
    // add more setup steps here if you need to
  } catch (error) {
    console.error('Error setting up app:', error);
    throw error;
  }
};
