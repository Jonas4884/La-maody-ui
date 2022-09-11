export const formatStatus = (status: 'IN_PROGRESS' | 'DELIVERED') => (
  status === 'DELIVERED' ? 'livrée' : 'en cours'
);
