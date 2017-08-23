pipeline {
  agent none
  stages {
    stage('Building') {
      steps {
        sh 'npm install'
      }
    }
    stage('Running') {
      steps {
        sh 'node index.js &'
      }
    }
    stage('Testing') {
      steps {
        sh './node_modules/mocha/.bin/mocha tests --reporter mocha-junit-reporter'
      }
    }
    stage('Assessment') {
      steps {
        junit(testResults: 'test-results.xml', healthScaleFactor: 1)
      }
    }
  }
}
