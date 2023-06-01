export const getCurrentUser = async () => {
  // ? Fetch Current User Information from CRM
  await ZOHO.CRM.CONFIG.getCurrentUser();
};
