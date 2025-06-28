interface Position {
  id: number;
  name: string;
}

interface VacancyProps {
  applicant: number;
  company: string;
  created_at: string;
  id: number;
  is_active: boolean;
  name: string;
  position: Position;
  vacancy_id: string;
}

interface QuestionProps {
  id: number;
  text: string;
  choices: QuestionChoiceProps[];
}

interface QuestionChoiceProps {
  id: number;
  text: string;
  next_question: number | null;
}

interface IUser {
  company_name: string;
  id: number;
  limit: number;
  phone: string | null;
}

interface IModalContext {
  modal: {
    addVacancy: boolean;
  };
  handleModal: ({ key, value }: { key: string; value: boolean }) => void;
}

type PriorityItem = {
  id: number;
  name: string;
};

type PriorityAnswer = {
  motivation: number;
  priority: number;
  active: boolean;
};

type QuestionAnswer = {
  question: number;
  answer: number;
  number: number;
};

type TestAnswerProps = {
  created_at: string;
  ball: number;
  id: number;
  full_name: string;
  phone: string;
  age: number;
  gender: string;
  edu: string;
  langs: string;
  achievement: string;
  specialization: string;
  motivations_time: string;
  questions_time: string;
  motivated_orders: {
    motivation: PriorityItem;
    priority: number;
    active: boolean;
  }[];
  question_orders: {
    answer: QuestionChoiceProps;
    number: number;
    question: QuestionProps;
  }[];
  vacancy: VacancyProps;
};

type RegisterFormDataProps = {
  fullName: string;
  phone: string;
  age: number;
  gender: string;
  edu: string;
  langs: string;
  achievement: string;
  specialization: string;
};
