import cookie from 'cookie';
import { NextPageContext } from 'next';

export const parseCookies = ({ req }: NextPageContext) =>
  cookie.parse(req ? req.headers.cookie || '' : document.cookie);
