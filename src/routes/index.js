import express from "express";
import usersRoute from "./usersRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Welcome"});
    })

    app.use(
        express.json(),
        usersRoute
    )
}

export default routes;