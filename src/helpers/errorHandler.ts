import { Request, Response, NextFunction } from "express";

class ErrorHandler {
  static notFound(req: Request, res: Response, _next: NextFunction) {
    res.status(404).json({ message: "Resource Not Found" });
  }

  static serverError(error: Error, req: Request, res: Response, _next: NextFunction) {
    res.status(500).json({ message: error.message });
  }
}

export default ErrorHandler;
