"use strict";

function lines(str) {
  return str.trim().split(/\n/);
}

function strip_comment(str) {
  return str.trim().split('#')[0];
}

function str_to_vec(str) {
  return str.trim().split(/\s+/).map(Number);
}

function not_empty(str) {
  return str.length != 0 || !!str.trim();
}

function str_to_face(str) {
  return str_to_vec(str).slice(1);
}

function off2json(str) {

  var offdata = lines(str.trim())
    .map(strip_comment)
    .filter(not_empty);

  if (offdata[0] != 'OFF') {
    throw new Error("File contents not correctly formatted");
  }

  var counts = str_to_vec(offdata[1]);
  var vertex_count = counts[0];

  var vertices = offdata.slice(2, vertex_count + 2).map(str_to_vec);
  var faces = offdata.slice(vertex_count + 2).map(str_to_face);

  return {
    vertices: vertices,
    faces: faces
  };

}

module.exports = off2json;

