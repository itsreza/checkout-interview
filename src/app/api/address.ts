"use server";
import axios from "axios";

import { cookies } from "next/headers";

export const getAddressesService = async () => {
  // const data =

  try {
    const response = await axios.get(
      "https://front-end-task.bmbzr.ir/my-addresses/"
    );
    if (response.status === 200) {
      console.log(response.headers["set-cookie"]);
      cookies().set("session", response.headers["set-cookie"], {
        secure: true,
      });

      return response.data;
    }
  } catch (e) {}
};
