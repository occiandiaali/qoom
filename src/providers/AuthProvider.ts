import React, { useContext, useEffect, useRef, useState } from "react";
import Realm from "realm";
import app from "../../RealmApp";

// new context obj for AuthProvider descendants
const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {};

export { AuthProvider };
