
import { ArrowRight, Shield, Sun, Wind, Droplet } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      title: "Solar Farm Initiative",
      type: "Solar Energy",