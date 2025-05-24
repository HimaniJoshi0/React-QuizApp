import React from "react";
import {  Routes, Route } from "react-router";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Home from "../pages/Home";
import Quiz from "../pages/quiz";
import NotFound from "../sections/NotFound";
import AttemptQuiz from "../pages/attemptQuix";

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path={"/quiz/:quizid"} element={<AttemptQuiz />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
