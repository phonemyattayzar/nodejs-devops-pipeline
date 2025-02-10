pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                // Automatically pulls the current code from the linked GitHub repository
                 git branch: 'main', 
                    url: 'https://github.com/phonemyattayzar/nodejs-devops-pipeline.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'  // Optional step, only if required
            }
        }

        stage('Build') {
            steps {
                echo 'Building the Node.js project...'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the Node.js project...'
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed.'
        }
    }
}
