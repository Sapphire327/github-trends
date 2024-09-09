import asyncHandler from 'express-async-handler'
import {updateList, getTop, getBySlug} from "../services/trends.services.js";
import {timer} from "../services/Timer.js";

export const updateTop=  asyncHandler (async(req,res,next)=>{
    await updateList().then(data=>{res.json(data)}).catch(next);
    timer.restart();
})
export const getAll=  asyncHandler (async(req,res,next)=>{
    getTop().then(data=>{res.json(data)}).catch(next);
})
export const getById=  asyncHandler (async(req,res,next)=>{
    getBySlug(req.query.slug).then(data=>{res.json(data)}).catch(next);
})