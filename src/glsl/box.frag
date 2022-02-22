uniform vec3 color;
uniform float alpha;
uniform float brightness;

void main(void) {
  vec4 dest = vec4(color, alpha);
  dest.rgb += brightness;
  gl_FragColor = dest;
}
