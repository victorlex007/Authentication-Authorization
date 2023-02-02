import { MongoClient } from "mongodb";
import {MONGODB_CNX_STR} from "../../config.js";

export const mongoDbclient = new MongoClient(MONGODB_CNX_STR)