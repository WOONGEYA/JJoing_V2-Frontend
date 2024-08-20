import { cx } from 'class-variance-authority';
import type { ClassValue } from 'class-variance-authority/types';
import { twMerge } from 'tailwind-merge';

export const cn = (...args: ClassValue[]) => twMerge(cx(args));
// classNames 대신 사용할 유틸 함수

// cx: 클래스 이름 결합, 조건부 클래스 처리에 유리
// twMerge: 중복된 tailwindCss 병합 후 최종 클래스 반환
