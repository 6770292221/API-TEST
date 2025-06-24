Feature: Partially Update a Post

@smoke @regression
  Scenario: TC01: should partially update post title
    Given Create Post
    When I send a PATCH request to "/posts/1" with body:
      """
      {
        "title": "Partially Updated Title"
      }
      """
    Then the response status should be 200
    And the response body "title" should be "Partially Updated Title"
    And the response body "id" should be 1

@smoke
  Scenario: TC02: should partially update post body
    When I send a PATCH request to "/posts/1" with body:
      """
      {
        "body": "Only Body Changed"
      }
      """
    Then the response status should be 200
    And the response body "body" should be "Only Body Changed"
