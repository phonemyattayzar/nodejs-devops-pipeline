pipeline {
    agent any

    tools {
        nodejs "node18" 
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/phonemyattayzar/nodejs-devops-pipeline.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }

    post {
        always {
            echo 'Sending email notification...'
            emailext(
                to: 'kophonemyat667@gmail.com',
                subject: "Build ${currentBuild.currentResult}: ${env.JOB_NAME}",
                body: "Build ${currentBuild.currentResult} for job ${env.JOB_NAME} at ${env.BUILD_URL}"
            )
        }

        failure {
            echo 'Build failed!'
        }
    }
}
