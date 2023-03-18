import type { SvgIconTypeMap } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import EscalatorWarningOutlinedIcon from '@mui/icons-material/EscalatorWarningOutlined';
import FemaleOutlinedIcon from '@mui/icons-material/FemaleOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import MaleOutlinedIcon from '@mui/icons-material/MaleOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';

export interface NavLinks {
  path: string;
  title: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
}

type NavLinksId = 'home' | 'features' | 'product' | 'clients' | '/';

export const authNavLinks: NavLinks[] = [
  {
    path: '/auth/login',
    title: 'log In',
    Icon: VpnKeyOutlinedIcon,
  },
  {
    path: '/logout',
    title: 'log Out',
    Icon: LoginOutlinedIcon,
  },
];

export const categoriesNavLinks = [
  {
    path: '/category/men',
    title: 'men',
    Icon: MaleOutlinedIcon,
  },
  {
    path: '/category/women',
    title: 'women',
    Icon: FemaleOutlinedIcon,
  },
  {
    path: '/category/kids',
    title: 'kids',
    Icon: EscalatorWarningOutlinedIcon,
  },
];

export const privateNavLinks = [
  {
    path: '/profile',
    title: 'profile',
    Icon: AccountCircleOutlinedIcon,
  },
  {
    path: '/my-purchase-orders',
    title: 'My purchase orders',
    Icon: ConfirmationNumberOutlinedIcon,
  },
];

export const adminNavLinks: NavLinks[] = [
  {
    path: '/products',
    title: 'products',
    Icon: CategoryOutlinedIcon,
  },
  {
    path: '/orders',
    title: 'Purchase orders',
    Icon: ConfirmationNumberOutlinedIcon,
  },
  {
    path: '/users',
    title: 'users',
    Icon: AdminPanelSettingsOutlinedIcon,
  },
];
