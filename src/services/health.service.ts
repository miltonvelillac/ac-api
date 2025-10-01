import { HealthModel } from "../models/health.model";


export class HealthService {
  async ping(): Promise<HealthModel> {
    // Aquí podrías chequear DB, cache, dependencias, etc.
    return {
      message: 'pong',
      timestamp: new Date().toISOString(),
    };
  }
}
