import { Deta } from "deta";

export const deta = Deta()
export const bse = deta.Base("foo");