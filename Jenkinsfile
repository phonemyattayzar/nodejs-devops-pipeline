pipeline {
  agent any

  tools {
    nodejs "node18" // Matches the Node.js installation name in Jenkins
  }

  stages {
    // Stage 1: Checkout code from GitHub
    stage('Checkout') {
      steps {
        git 'https://github.com/phonemyattayzar/nodejs-devops-pipeline.git'
      }
    }

    // Stage 2: Install dependencies
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    // Stage 3: Run tests
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }

    // Stage 4: Build the app (optional)
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
  }

  // Post-build actions (e.g., notifications)
  post {
    always {
      script {
        // Send email on failure
        if (currentBuild.result == 'FAILURE') {
          emailext (
            subject: "🚨 CI Pipeline Failed: ${env.JOB_NAME}",
            body: "Check the build log: ${env.BUILD_URL}",
            to: 'kophonemyat667@gmail.com'
          )
        }
      }
    }
  }
}
