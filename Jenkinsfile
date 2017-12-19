/**
* This is a template Jenkinsfile to show the general structure
* of the pipeline.
*
* For more info about the syntax and commands, visit:
* https://jenkins.io/doc/book/pipeline/jenkinsfile/
*/

pipeline {
  agent any

  /*
  * Build Actions
  */
  stages {
    stage('Building') {
      steps {
        echo 'STUB: steps for building should go here'
        // eg. "sh 'npm i'"
      }
    }
    stage('Running') {
      steps {
        echo 'STUB: steps for running should go here'
        // eg. "sh 'node index.js &'"
        // NOTE: remember to keep the command from running forever
      }
    }
    stage('Testing') {
      steps {
        echo 'STUB: steps for testing should go here'
        // eg. "./node_modules/mocha/bin/mocha tests --reporter mocha-junit-reporter"
        // NOTE: remember to create a JUnit XML file from running the unit tests, if possible
      }
    }
    stage('Deployment') {
      steps {
        echo 'STUB: steps for deployment should go here'
        // NOTE: automatic deployment is optional
      }
    }
  }

  /*
  * Post-build Actions
  */
  post {
    always {
      echo 'steps in this section will always be run post-build'

      echo 'publish JUnit report, if any'
      // eg. junit 'test-results.xml'
    }
    failure {
      // steps in this section will only be run post-build if the build fails

      // Checks if the current branch is a critical branch
      script {
        def criticalBranches = [
          'master'
        ]

        // if branch is critical, send emails to:
        // - Developers who was involved in the last build
        // - Developers who are suspected to have caused the failing build
        // - The SME
        if (criticalBranches.contains(env.BRANCH_NAME)) {
          emailext (
              subject: "CI BUILD FAILED FAILED: ${env.JOB_NAME} [${env.BUILD_NUMBER}]",
              body: """
                CI BUILD FAILED FAILED: ${env.JOB_NAME} [${env.BUILD_NUMBER}]

                Check console output at ${env.BUILD_URL}
                """,
              recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'CulpritsRecipientProvider']],

              // [optional] place SME's email in here
              to: "sme@freedom.tm"
            )
        }
      }

    }
  }
}
