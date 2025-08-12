# 🧪 Testing Showcase Project

![CI](https://github.com/ReutDimri/testing-showcase/actions/workflows/ci.yml/badge.svg)
![Coverage](https://img.shields.io/badge/coverage-85%25-brightgreen)
![Tests](https://img.shields.io/badge/tests-45%20passed-success)

A comprehensive testing suite demonstrating best practices in React testing with TypeScript.

## ✨ Features

- **Unit Testing**: Mathematical operations, string utilities
- **Component Testing**: React components with user interactions
- **Integration Testing**: API calls with mocked responses
- **Coverage Reports**: 85%+ code coverage
- **CI/CD Pipeline**: Automated testing with GitHub Actions

## 🚀 Quick Start

\`\`\`bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in CI mode
npm run test:ci
\`\`\`

## 📊 Test Coverage

| File | Coverage |
|------|----------|
| Calculator.ts | 100% |
| StringUtils.ts | 95% |
| UserProfile.tsx | 90% |
| TodoList.tsx | 88% |
| ApiService.ts | 85% |

## 🧪 Testing Stack

- **Jest**: Testing framework
- **React Testing Library**: Component testing
- **TypeScript**: Type safety
- **GitHub Actions**: CI/CD

## 📁 Project Structure

\`\`\`
src/
├── components/
│   ├── TodoList.tsx
│   ├── TodoList.test.tsx
│   ├── UserProfile.tsx
│   └── UserProfile.test.tsx
├── utils/
│   ├── calculator.ts
│   ├── calculator.test.ts
│   ├── stringUtils.ts
│   └── stringUtils.test.ts
├── services/
│   ├── api.ts
│   └── api.test.ts
└── App.tsx
\`\`\`

## 🎯 Testing Principles

1. **Arrange-Act-Assert**: Clear test structure
2. **One assertion per test**: Focused testing
3. **Descriptive names**: Self-documenting tests
4. **Mock external dependencies**: Isolated testing
5. **Test user behavior**: Not implementation details

## 📝 License

MIT