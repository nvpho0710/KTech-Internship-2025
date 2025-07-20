import axiosClient from './axiosClient';

export const getAllUsers = async () => {
  const res = await axiosClient.get('/users');
  return res.data;
};

export const getAllRoles = async () => {
  const res = await axiosClient.get('/roles');
  return res.data;
};

export const addRole = async (roleName: string) => {
  const res = await axiosClient.post('/roles', { name: roleName });
  return res.data;
};

export const assignRolesToUser = async (userId: number, roles: string[]) => {
  const res = await axiosClient.patch(`/users/${userId}/roles`, { roles });
  return res.data;
};
