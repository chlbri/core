import { Domain } from '../types/domain';

export function useCase<D extends Domain, K extends keyof D = keyof D>(
  domain: D,
  use: K,
): D[K]['call'] {
  return domain[use].call;
}
