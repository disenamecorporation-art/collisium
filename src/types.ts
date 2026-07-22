/**
 * Types and interfaces for Consillium Jurídico
 */

export type ActiveTab = 
  | 'inicio' 
  | 'gobernanza' 
  | 'consejeros' 
  | 'dominios' 
  | 'trayectoria' 
  | 'contacto' 
  | 'faq';

export type DomainSubSectionId = 
  | 'infraestructura' 
  | 'energia' 
  | 'integridad' 
  | 'defensa' 
  | 'deportivo' 
  | 'apoyo';

export interface EvaluacionChallengeForm {
  areaEstratega: string;
  descripcionDesafio: string;
  expectativas: string;
  horizonteUrgencia: 'inmediato' | 'preventivo' | '';
  contacto: string;
}

export interface InduccionModeloForm {
  organizacion: string;
  objetivoAlianza: string;
  expectativasModelo: string;
  contacto: string;
}

export interface Consejero {
  id: string;
  nombre: string;
  cargo: string;
  perfilCorto: string;
  descripcionCompleta: string;
  imagenUrl: string;
}
